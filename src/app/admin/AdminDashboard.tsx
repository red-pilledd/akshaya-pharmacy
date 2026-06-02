"use client";

import { useState, useEffect, useCallback } from "react";
import { Plus, Pencil, Trash2, X, Check, MapPin, Phone, Search } from "lucide-react";

type Store = {
  id: number;
  name: string;
  district: string;
  address: string;
  phone: string;
  lat: number;
  lng: number;
  discount: string;
  active: boolean;
};

const EMPTY: Omit<Store, "id" | "active"> = {
  name: "", district: "Kollam", address: "", phone: "",
  lat: 0, lng: 0, discount: "Up to 50%",
};

export default function AdminDashboard({ password }: { password: string }) {
  const [stores, setStores] = useState<Store[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filterDistrict, setFilterDistrict] = useState("All");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editForm, setEditForm] = useState<Partial<Store>>({});
  const [showAdd, setShowAdd] = useState(false);
  const [addForm, setAddForm] = useState({ ...EMPTY });
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState("");

  const headers = { "Content-Type": "application/json", "x-admin-token": password };

  const fetchStores = useCallback(async () => {
    setLoading(true);
    const res = await fetch("/api/stores/all", { headers: { "x-admin-token": password } });
    const data = await res.json();
    setStores(Array.isArray(data) ? data : []);
    setLoading(false);
  }, [password]);

  useEffect(() => { fetchStores(); }, [fetchStores]);

  const flash = (m: string) => { setMsg(m); setTimeout(() => setMsg(""), 3000); };

  const saveEdit = async (id: number) => {
    setSaving(true);
    const res = await fetch(`/api/stores/${id}`, {
      method: "PUT", headers, body: JSON.stringify(editForm),
    });
    if (res.ok) { flash("✓ Store updated"); setEditingId(null); fetchStores(); }
    else flash("✗ Update failed");
    setSaving(false);
  };

  const deleteStore = async (id: number, name: string) => {
    if (!confirm(`Remove "${name}" from the list?`)) return;
    await fetch(`/api/stores/${id}`, { method: "DELETE", headers });
    flash("✓ Store removed");
    fetchStores();
  };

  const addStore = async () => {
    if (!addForm.name || !addForm.address) return flash("Name and address are required");
    setSaving(true);
    const res = await fetch("/api/stores", {
      method: "POST", headers, body: JSON.stringify(addForm),
    });
    if (res.ok) { flash("✓ Store added"); setShowAdd(false); setAddForm({ ...EMPTY }); fetchStores(); }
    else flash("✗ Add failed");
    setSaving(false);
  };

  const filtered = stores.filter((s) => {
    const matchDistrict = filterDistrict === "All" || s.district === filterDistrict;
    const matchSearch = !search || s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.address.toLowerCase().includes(search.toLowerCase());
    return matchDistrict && matchSearch;
  });

  const Field = ({ label, value, onChange, type = "text", small = false }: any) => (
    <div className={small ? "" : "col-span-2"}>
      <label className="block text-xs text-gray-500 mb-0.5">{label}</label>
      <input
        type={type} value={value} onChange={(e) => onChange(e.target.value)}
        className="w-full px-2 py-1.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Store Manager</h1>
            <p className="text-sm text-gray-500 mt-0.5">{stores.filter(s => s.active).length} active stores</p>
          </div>
          <button
            onClick={() => { setShowAdd(true); setMsg(""); }}
            className="flex items-center gap-2 px-4 py-2.5 bg-emerald-700 text-white rounded-xl text-sm font-semibold hover:bg-emerald-800 transition-colors"
          >
            <Plus className="w-4 h-4" /> Add Store
          </button>
        </div>

        {/* Flash message */}
        {msg && (
          <div className={`mb-4 px-4 py-2.5 rounded-xl text-sm font-medium ${msg.startsWith("✓") ? "bg-emerald-50 text-emerald-700 border border-emerald-200" : "bg-red-50 text-red-700 border border-red-200"}`}>
            {msg}
          </div>
        )}

        {/* Add Store Form */}
        {showAdd && (
          <div className="bg-white rounded-2xl border border-emerald-200 p-6 mb-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-gray-900">Add New Store</h2>
              <button onClick={() => setShowAdd(false)}><X className="w-5 h-5 text-gray-400" /></button>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2">
                <label className="block text-xs text-gray-500 mb-0.5">Store Name *</label>
                <input value={addForm.name} onChange={e => setAddForm(p => ({ ...p, name: e.target.value }))}
                  placeholder="Akshaya Community Pharmacy - Location"
                  className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              </div>
              <div className="col-span-2">
                <label className="block text-xs text-gray-500 mb-0.5">Address *</label>
                <input value={addForm.address} onChange={e => setAddForm(p => ({ ...p, address: e.target.value }))}
                  placeholder="Full address"
                  className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-0.5">District *</label>
                <select value={addForm.district} onChange={e => setAddForm(p => ({ ...p, district: e.target.value }))}
                  className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white">
                  <option>Kollam</option>
                  <option>Thiruvananthapuram</option>
                  <option>Alappuzha</option>
                </select>
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-0.5">Phone</label>
                <input value={addForm.phone} onChange={e => setAddForm(p => ({ ...p, phone: e.target.value }))}
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-0.5">Latitude</label>
                <input type="number" step="0.0001" value={addForm.lat || ""} onChange={e => setAddForm(p => ({ ...p, lat: parseFloat(e.target.value) }))}
                  placeholder="e.g. 8.8932"
                  className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-0.5">Longitude</label>
                <input type="number" step="0.0001" value={addForm.lng || ""} onChange={e => setAddForm(p => ({ ...p, lng: parseFloat(e.target.value) }))}
                  placeholder="e.g. 76.6141"
                  className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-0.5">Discount</label>
                <select value={addForm.discount} onChange={e => setAddForm(p => ({ ...p, discount: e.target.value }))}
                  className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white">
                  <option>Up to 30%</option>
                  <option>Up to 40%</option>
                  <option>Up to 50%</option>
                  <option>Up to 60%</option>
                </select>
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-3">
              💡 Get coordinates from{" "}
              <a href="https://www.google.com/maps" target="_blank" rel="noreferrer" className="text-emerald-600 underline">Google Maps</a>
              {" "}— right-click on the location → copy coordinates
            </p>
            <div className="flex gap-3 mt-4">
              <button onClick={addStore} disabled={saving}
                className="px-5 py-2 bg-emerald-700 text-white text-sm font-semibold rounded-xl hover:bg-emerald-800 disabled:opacity-50 transition-colors">
                {saving ? "Adding…" : "Add Store"}
              </button>
              <button onClick={() => setShowAdd(false)} className="px-5 py-2 border border-gray-200 text-gray-600 text-sm rounded-xl hover:bg-gray-50">
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-5">
          <div className="relative flex-1 min-w-48">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input value={search} onChange={e => setSearch(e.target.value)}
              placeholder="Search stores…"
              className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500" />
          </div>
          {["All", "Kollam", "Thiruvananthapuram", "Alappuzha"].map(d => (
            <button key={d} onClick={() => setFilterDistrict(d)}
              className={`px-4 py-2 text-sm font-semibold rounded-xl border transition-colors ${filterDistrict === d ? "bg-emerald-700 text-white border-emerald-700" : "bg-white text-gray-600 border-gray-200 hover:border-emerald-300"}`}>
              {d}
            </button>
          ))}
        </div>

        {/* Table */}
        {loading ? (
          <div className="text-center py-20 text-gray-400">Loading stores…</div>
        ) : (
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600">Store</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 hidden md:table-cell">District</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 hidden lg:table-cell">Phone</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 hidden lg:table-cell">Discount</th>
                  <th className="px-4 py-3 w-24"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filtered.map(store => (
                  editingId === store.id ? (
                    <tr key={store.id} className="bg-emerald-50">
                      <td className="px-4 py-3" colSpan={5}>
                        <div className="grid grid-cols-2 gap-2 mb-2">
                          <div className="col-span-2">
                            <input value={editForm.name || ""} onChange={e => setEditForm(p => ({ ...p, name: e.target.value }))}
                              className="w-full px-2 py-1.5 text-sm border border-emerald-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                          </div>
                          <div className="col-span-2">
                            <input value={editForm.address || ""} onChange={e => setEditForm(p => ({ ...p, address: e.target.value }))}
                              className="w-full px-2 py-1.5 text-sm border border-emerald-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                          </div>
                          <input value={editForm.phone || ""} onChange={e => setEditForm(p => ({ ...p, phone: e.target.value }))} placeholder="Phone"
                            className="px-2 py-1.5 text-sm border border-emerald-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                          <select value={editForm.district || ""} onChange={e => setEditForm(p => ({ ...p, district: e.target.value }))}
                            className="px-2 py-1.5 text-sm border border-emerald-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white">
                            <option>Kollam</option>
                            <option>Thiruvananthapuram</option>
                            <option>Alappuzha</option>
                          </select>
                          <input type="number" step="0.0001" value={editForm.lat || ""} onChange={e => setEditForm(p => ({ ...p, lat: parseFloat(e.target.value) }))} placeholder="Lat"
                            className="px-2 py-1.5 text-sm border border-emerald-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                          <input type="number" step="0.0001" value={editForm.lng || ""} onChange={e => setEditForm(p => ({ ...p, lng: parseFloat(e.target.value) }))} placeholder="Lng"
                            className="px-2 py-1.5 text-sm border border-emerald-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                        </div>
                        <div className="flex gap-2">
                          <button onClick={() => saveEdit(store.id)} disabled={saving}
                            className="flex items-center gap-1 px-3 py-1.5 bg-emerald-700 text-white text-xs font-semibold rounded-lg hover:bg-emerald-800 disabled:opacity-50">
                            <Check className="w-3.5 h-3.5" /> Save
                          </button>
                          <button onClick={() => setEditingId(null)}
                            className="flex items-center gap-1 px-3 py-1.5 border border-gray-200 text-gray-600 text-xs rounded-lg hover:bg-gray-50">
                            <X className="w-3.5 h-3.5" /> Cancel
                          </button>
                        </div>
                      </td>
                    </tr>
                  ) : (
                    <tr key={store.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3">
                        <div className="font-medium text-gray-900 leading-snug">{store.name}</div>
                        <div className="text-xs text-gray-400 mt-0.5 flex items-center gap-1">
                          <MapPin className="w-3 h-3" /> {store.address.slice(0, 60)}{store.address.length > 60 ? "…" : ""}
                        </div>
                      </td>
                      <td className="px-4 py-3 hidden md:table-cell">
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${store.district === "Kollam" ? "bg-emerald-50 text-emerald-700" : store.district === "Thiruvananthapuram" ? "bg-blue-50 text-blue-700" : "bg-amber-50 text-amber-700"}`}>
                          {store.district}
                        </span>
                      </td>
                      <td className="px-4 py-3 hidden lg:table-cell">
                        {store.phone ? (
                          <a href={`tel:${store.phone}`} className="flex items-center gap-1 text-emerald-700 hover:underline">
                            <Phone className="w-3 h-3" /> {store.phone}
                          </a>
                        ) : <span className="text-gray-300 text-xs">—</span>}
                      </td>
                      <td className="px-4 py-3 hidden lg:table-cell text-xs text-gray-500">{store.discount}</td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2 justify-end">
                          <button onClick={() => { setEditingId(store.id); setEditForm(store); }}
                            className="p-1.5 rounded-lg text-gray-400 hover:text-emerald-700 hover:bg-emerald-50 transition-colors">
                            <Pencil className="w-4 h-4" />
                          </button>
                          <button onClick={() => deleteStore(store.id, store.name)}
                            className="p-1.5 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50 transition-colors">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  )
                ))}
              </tbody>
            </table>
            {filtered.length === 0 && (
              <div className="text-center py-12 text-gray-400 text-sm">No stores found</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
